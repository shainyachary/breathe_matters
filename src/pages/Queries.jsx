import "./Queries.css";
import { queries } from "../utils/queries";
import { useState } from "react";

const Queries = ({ queriesRef }) => {
  const [openAccord, setOpenAccord] = useState(null);

  const toggleAccord = (id) => {
    setOpenAccord(openAccord === id ? null : id);
  };
  return (
    <section ref={queriesRef}>
      <div className="title">
        <div className="main-title">Queries</div>
        <div className="sub-title">Your inquiries, our expertise.</div>
      </div>
      <div className="query-content">
        {queries?.map((query) => (
          <div className="accord-contain" key={query?.id}>
            <div
              className="query-title"
              onClick={() => toggleAccord(query?.id)}
            >
              <p>{query?.title}</p>
              {openAccord === query?.id ? (
                <div className="fa-solid fa-angle-up"></div>
              ) : (
                <div className="fa-solid fa-angle-down"></div>
              )}
            </div>
            {openAccord === query?.id && (
              <div className="query-desc">
                <p>{query?.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Queries;
