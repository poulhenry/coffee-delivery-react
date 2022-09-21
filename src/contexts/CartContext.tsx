import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem('coffeeDelivery:cartItems')

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }

    return []
  })

  const cartQuantity = cartItems.length
  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  useEffect(() => {
    localStorage.setItem('coffeeDelivery:cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (item) => item.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newItem = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = cartItems.findIndex(
        (item) => item.id === cartItemId,
      )

      if (coffeeAlreadyExistsInCart >= 0) {
        const item = draft[coffeeAlreadyExistsInCart]

        draft[coffeeAlreadyExistsInCart].quantity =
          type === 'increase'
            ? (item.quantity += 1)
            : item.quantity === 0
            ? 0
            : (item.quantity -= 1)
      }
    })

    setCartItems(newItem)
  }

  function removeCartItem(cartItemId: number) {
    const newItem = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = cartItems.findIndex(
        (item) => item.id === cartItemId,
      )

      if (coffeeAlreadyExistsInCart >= 0) {
        draft.splice(coffeeAlreadyExistsInCart, 1)
      }
    })

    setCartItems(newItem)
  }

  const values = {
    cartItems,
    cartQuantity,
    cartItemsTotal,
    addCoffeeToCart,
    changeCartItemQuantity,
    removeCartItem,
  }

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}
