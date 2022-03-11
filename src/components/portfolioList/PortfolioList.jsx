import './portfolioList.scss';

const PortfolioList = ({ title, type, id, active, setSelected }) => {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)}>
        {title}
        {type}
    </li>
  )
}

export default PortfolioList