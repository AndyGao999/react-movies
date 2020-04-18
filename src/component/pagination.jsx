import React, {Component} from "react";
import _ from "lodash";
import {Link} from "react-router-dom";

class Pagination extends Component {
  render() {
    const {itemsCounts, pageSize, currentPage, onPageChange} = this.props;

    const pages = _.range(1, itemsCounts / pageSize + 1);

    if (pages === 1) return "";

    return pages.map((m) => (
      <Link>
        {" "}
        <li
          key={m}
          className={currentPage === m ? "page-item active" : "page-item"}>
          <div className='page-link' onClick={() => onPageChange(m)}>
            {m}
          </div>
        </li>
      </Link>
    ));
  }
}

export default Pagination;
