import CardItemCon from "./card parts/CardItemCon"

// eslint-disable-next-line react/prop-types
const Opencard = ({handleCard, items}) => {

  return (
    <div>
      <CardItemCon handleCard={handleCard} items={items}/>
    </div>
  )
}

export default Opencard
