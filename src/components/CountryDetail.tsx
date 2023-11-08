const CountryDetail: React.FC = () => {
  return (
    <>
      <div className="container-btn">
        <button className="btn btn-back">&larr; Back</button>
      </div>
      <div className="container-detail">
        <div className="country-img">
          <img src="https://flagcdn.com/in.svg" />
        </div>
        <div className="country-detail">
          <h1 className="heading-primary">Belgium</h1>
          <div className="flex-side-by-side">
            <div className="info">
              <p>
                <strong>Native Name: </strong>
                Belgie
              </p>
              <p>
                <strong>Population: </strong>
                11,319,511
              </p>
              <p>
                <strong>Region: </strong>
                Europe
              </p>
              <p>
                <strong>Sub Region: </strong>
                Western Europe
              </p>
              <p>
                <strong>Capital: </strong>
                Brussels
              </p>
            </div>
            <div className="info">
              <p>
                <strong>Top Level Domain: </strong>
                .be
              </p>
              <p>
                <strong>Currencies: </strong>
                Euro
              </p>
              <p>
                <strong>Languages: </strong>
                Dutch, French, German
              </p>
            </div>
          </div>

          <div className="flex-side-by-side">
            <strong>Native Name: </strong>
            <div className="btn-wrapper">
              <button className="btn btn-country">France</button>
              <button className="btn btn-country">Germany</button>
              <button className="btn btn-country">Netherlands</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
