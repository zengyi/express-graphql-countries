import React from "react";
import className from "classnames";
import { Link } from "react-router-dom";

const CountryItem = ({ country, type = null }) => {
  return (
    <div className={`col-lg-${type ? 6 : 4}`}>
      <div className="card mb-4">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <h5>
                {country.id} / {country.iso2Code}
              </h5>
            </div>
            <div className="col-6 text-right">
              <span
                className={className({
                  // "badge badge-light": country.incomeLevel.id,
                  // "badge badge-info": country.incomeLevel.id,
                  // "badge badge-secondary": country.incomeLevel.id,
                  "text-dark": country.incomeLevel.id === "NA",
                  "badge badge-danger": country.incomeLevel.id === "LIC",
                  "badge badge-warning": country.incomeLevel.id === "LMC",
                  "badge badge-success": country.incomeLevel.id === "UMC",
                  "badge badge-primary": country.incomeLevel.id === "HIC"
                })}
              >
                {country.incomeLevel.value}
              </span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h6 className="text-success">{country.name}</h6>
          <p>{country.region.value}</p>
          <Link
            to={`/country/${country.id}`}
            className="btn btn-secondary float-right"
          >
            Country Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryItem;
