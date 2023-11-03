interface CardProps {
  image: string;
  title: string;
  population: number;
  region: string;
  capital: string;
}

function Card({ image, title, population, region, capital }: CardProps) {
  return (
    <div className="card">
      <img className="card-img" src={image} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-details">
          <p>
            <strong>Population: </strong>
            {population}
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
}

export default Card;
