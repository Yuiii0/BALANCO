//Pagination.tsx

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import styles from "../../styles/pagination.module.scss";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

function Pagination({ pageCount, currentPage, onPageChange }: PaginationProps) {
  return (
    <ReactPaginate
      previousLabel={<FiChevronLeft />}
      nextLabel={<FiChevronRight />}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={styles.pagination}
      pageLinkClassName={styles.pagination__link}
      activeLinkClassName={styles.pagination__link__active}
      forcePage={currentPage}
      pageRangeDisplayed={3}
      marginPagesDisplayed={0}
    />
  );
}

export default Pagination;
