import { useNavigation } from "../hooks/useNavigation";
import formatNumber from "../utils/formatNumber";

interface CardProps {
  to: string;
  image: string;
  title: string;
  population: number;
  region: string;
  capital: string;
}

const Card: React.FC<CardProps> = ({
  to,
  image,
  title,
  population,
  region,
  capital,
}) => {
  const { navigate } = useNavigation();

  return (
    <div className="card" onClick={() => navigate(`/country/${to}`)}>
      <img className="card-img" src={image} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-details">
          <p>
            <strong>Population: </strong>
            {formatNumber(population)}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
