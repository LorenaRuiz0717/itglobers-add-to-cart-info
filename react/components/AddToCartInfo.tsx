import React from "react"
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import { generateBlockClass } from "@vtex/css-handles"
import styles from "./styles.css"

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(styles.container, blockClass)
  const container__item = generateBlockClass(styles.container__item, blockClass)
  const container__image = generateBlockClass(styles.container__image, blockClass)
  const container__info_product = generateBlockClass(styles.container__info_product, blockClass)
  const image__product = generateBlockClass(styles.image__product, blockClass)
  const item__name_product = generateBlockClass(styles.item__name_product, blockClass)
  const item__id_product = generateBlockClass(styles.item__id_product, blockClass)
  const item__price_product = generateBlockClass(styles.item__price_product, blockClass)
  const item__quantity_product = generateBlockClass(styles.item__quantity_product, blockClass)
  const container__totalaizers = generateBlockClass(styles.container__totalaizers, blockClass)
  const container__items_quantity = generateBlockClass(styles.container__items_quantity, blockClass)
  const container__total__price = generateBlockClass(styles.container__total__price, blockClass)
  const button_continue_buy = generateBlockClass(styles.button_continue_buy, blockClass)
  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()

  console.log("este producto tiene info", productInfo)
  console.log("order", items, totalizers[0])
  return (
    <div className={container}>
      {
        items.map((item: any, index: number) => {
          console.log(item);
          return (
            <div key={index} className={container__item}>
              <div className={container__image}>
                <img src={item.imageUrls.at1x} className={image__product} />
              </div>
              <div className={container__info_product}>
                <p className={item__name_product}>{item.name}</p>
                <p className={item__id_product}>{item.id}</p>
                <p className={item__price_product}>${item.price / 100}</p>
                <p className={item__quantity_product}>Cant: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
      <div className={container__totalaizers}>
        <p className={container__items_quantity}>Tenemos {items.length} items</p>
        <p className={container__total__price}>Total: $ {totalizers[0]?.value / 100}</p>
        <div>
        <a href="/">
          <button className={button_continue_buy}>Continua comprando</button>
        </a>
        </div>
      </div>
    </div>
  )
}
export default AddToCartInfo
