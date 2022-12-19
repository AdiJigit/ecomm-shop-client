import React, { useState, useEffect,  useContext } from 'react'
import {
  TransformComponent,
  TransformWrapper,
} from "@pronestor/react-zoom-pan-pinch";
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Store } from '../store'
import { toast } from 'react-toastify';



const ProductDetails = () => {

  const navigate = useNavigate()

  const {state, dispatch: ctxDispatch} = useContext(Store)
  const {cart, wish} = state;

  const [selectedImg, setSelectedImg] = useState('')


  const [product, setProduct] = useState([])
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')

  const location = useLocation()

  const id = location.pathname.split('/')[2]
  console.log(id)

  useEffect(() => {

    const fetchData = async () => {
      const resultProduct = await axios.get(process.env.URI + `/api/products/find/${id}`);
      console.log(resultProduct.data);
      setProduct(resultProduct.data)
    };

    fetchData();
  }, [id])

  //ad to cart
  const addToCartHandler = async() => {
    const existsItem = cart.cartItems.find((x) => x._id === product._id) //if it already exists in cart
    const quantity = existsItem ? existsItem.quantity + 1 : 1;//then quantity + 1 if not then 1

    ctxDispatch({
      type: 'ADD_TO_CART',
      payload: {...product, quantity, size, color},
    })

    //this put if you will or not
    toast.success('You have successfully added the product to the cart')
    navigate('/cart')
  }

  const addToWishHandler = async() => {
    const existsItem = wish?.wishItems.find((x) => x._id === product._id) //if it already exists in wish
    const quantity = existsItem ? existsItem.quantity : 1;//quantity is 1

    if(existsItem){
      toast.error('Sorry. You have already added product to your wishlist')
      return; //no duplication adding product to whishlist
    }

    ctxDispatch({
      type: 'ADD_TO_WISH',
      payload: {...product, quantity},
  })

     //this put if you will or not
     toast.success('You have successfully added the product to the wishlist')
     navigate('/wish')

}

  return (
    <>
    <div className='hidden sm:block'>
    <div className='pd-container px-4'>
      <div className="pd-row">
        <div className="pd-col">
          <div className="pd-imageDiv">
            <div className="pd-top">
            <TransformWrapper>
              <TransformComponent>
                <img className='pd-img' src={selectedImg || product.image} />
              </TransformComponent>
            </TransformWrapper>
            </div>
            <div className="pd-bottom">
              <img className='pd-smallImg' src={product.image} onClick={() => setSelectedImg(`${product.image}`)} alt='' />
              <img className='pd-smallImg' src={product.imageOne} onClick={() => setSelectedImg(`${product.imageOne}`)} alt='' />
            </div>
          </div>
        </div>
        <div className="pd-col">
          <div className="pg-groups">
            <div className="pd-group">
              <h3 className="pd-title">{product.title}</h3>
            </div>
            <div className="pd-group">
              <span className="pd-category">{product.category}</span>
              <span className="pd-subcategory font-bold">{product.subcategory}</span>
            </div>
            <div className="pd-group">
              <p className="pd-title">{product.description}</p>
            </div>
            <div className="pd-group">
              <p className="pd-quantity">QUANTITY: <span className='pd-quantityNumber'>1</span></p>
            </div>
            <div className="pd-group">
              <div className="pd-otherAction">
                <div className="pd-size">
                    <h4 className="pd-sizeTitle font-bold text-[14px]">SIZES:</h4>
                    <div className="pd-sizeDiv">
                      {
                        product.sizes?.map((size) => (
                          <>
                            <input type='radio' id={size.value} onClick={(e) => setSize(e.target.value)} key={size._id} name='size' value={size.value} required />
                            <label htmlFor={size.value}>{size.value}</label>
                          </>
                        ))
                        }
                    </div>
                </div>
                <div className="pd-color">
                    <h4 className="pd-sizeTitle font-bold text-[14px]">COLORS:</h4>
                    <div className="pd-sizeDiv">
                    {
                        product.colors?.map((color) => (
                          <>
                            <input type='radio' onClick={(e) => setColor(e.target.value)} id={color.value} key={color._id} name='color' value={color.value} required />
                            <label htmlFor={color.value}>{color.value}</label>
                          </>
                        ))
                    }
                    </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-lg">price: ${(product.price)?.toFixed(2)}</span>
              <div className='flex items-center'>
                <span>Star: {product.star}</span>
              </div>
            </div>
            <div className="pd-group">
             <div className="pd-buttonsgroup">
                <button className='pd-wish' onClick={addToWishHandler}>ADD TO WISH</button>
                <button className='pd-cart' onClick={addToCartHandler}>ADD TO CART</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


    {/* MOBILE MENU */}
    <div className='sm:hidden'>
    <div className='px-4'>
      <div>
        <div className="pd-col">
          <div className="pd-imageDiv">
            <div className="pd-top">
            <TransformWrapper>
              <TransformComponent>
                <img className='pd-img' src={selectedImg || product.image} alt=''  />
              </TransformComponent>
            </TransformWrapper>
            </div>
            <div className="pd-bottom">
              <img className='pd-smallImg' src={product.image} onClick={() => setSelectedImg(`${product.image}`)} alt='' />
              <img className='pd-smallImg' src={product.imageOne} onClick={() => setSelectedImg(`${product.imageOne}`)} alt='' />
            </div>
          </div>
        </div>
        <div className="pd-col">
          <div className="pg-groups">
            <div className="pd-group">
              <h3 className="pd-title pt-8">{product.title}</h3>
            </div>
            <div className="pd-group">
              <span className="pd-category text-xl">{product.category}</span>
              <span className="pd- text-lg font-bold">{product.subcategory}</span>
            </div>
            <div className="pd-group">
              <p className="pd-title text-lg">{product.description}</p>
            </div>
            <div className="pd-group">
              <p className="text-lg">QUANTITY: <span className='text-xl font-bold'>1</span></p>
            </div>
            <div className="pd-group">
              <div className="pd-otherAction">
                <div className="pd-size">
                    <h4 className="pd-sizeTitle font-bold text-lg">SIZES:</h4>
                    <div className="pd-sizeDiv">
                      {
                        product.sizes?.map((size) => (
                          <>
                            <input type="radio" onClick={(e) => setSize(e.target.value)} id={size.title} key={size._id} name='size' value={size?.title} required />
                            <label htmlFor={size?.title}>{size.title}</label>
                          </>
                        ))
                        }
                    </div>
                </div>
                <div className="pd-color">
                    <h4 className="pd-sizeTitle font-bold text-lg">COLORS:</h4>
                    <div className="pd-sizeDiv">
                    {
                        product.colors?.map((color) => (
                          <>
                            <input type='radio' onClick={(e) => setColor(e.target.value)}id={color.title} key={color._id} name= 'color' value={color.title} required />
                            <label htmlFor={color.title}>{color.title}</label>
                          </>
                        ))
                    }
                    </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-lg">price: ${(product.price)?.toFixed(2)}</span>
              <div className='flex items-center'>
                <span>Star: {product.star}</span>
              </div>
            </div>
            <div className="pd-group">
             <div className="pd-buttonsgroup">
                <button className='pd-wish text-lg' onClick={addToWishHandler}>ADD TO WISH</button>
                <button className='pd-cart text-lg' onClick={addToCartHandler}>ADD TO CART</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default ProductDetails