import React from 'react';
import PropTypes from 'prop-types';
import Images from '../../../assets/images/index';
import Button from '../Button';
import Wrapper from '../Wrapper/Wrapper';
import './style.scss';

export default function Pagination({
  pageNumber,
  maxRecordNumber,
  recordsPerPage,
  bulkSkip,
  onPageChange,
}) {
  const { bulkBackIcon, backIcon, frontIcon, bulkFrontIcon } = Images;
  const maxPageNumber = Math.ceil(maxRecordNumber / recordsPerPage);
  const recordsNumber = pageNumber * recordsPerPage;

  const onBulkBack = () => {
    onPageChange(Math.max(1, pageNumber - bulkSkip));
  };
  const onBulkfront = () => {
    onPageChange(Math.min(maxPageNumber, pageNumber + bulkSkip));
  };
  const onBack = () => {
    onPageChange(pageNumber - 1);
  };
  const onFront = () => {
    onPageChange(pageNumber + 1);
  };
  return (
    <Wrapper className="pagination-wrapper br-12 m-10 pl-35 pr-35">
      <Button
        variant="plain"
        icon={<img src={bulkBackIcon} alt="none" />}
        onClick={onBulkBack}
        disabled={pageNumber <= 1}
      />
      <Button
        variant="plain"
        icon={<img src={backIcon} alt="none" />}
        onClick={onBack}
        disabled={pageNumber <= 1}
      />
      <Wrapper className="page-details mb-2">
        <span>{recordsNumber - recordsPerPage + 1} </span>
        <span>- </span>
        <span>
          {recordsNumber < maxRecordNumber ? recordsNumber : maxRecordNumber}{' '}
        </span>
        <span>of </span>
        <span>{maxRecordNumber}</span>
      </Wrapper>
      <Button
        variant="plain"
        icon={<img src={frontIcon} alt="none" />}
        onClick={onFront}
        disabled={pageNumber >= maxPageNumber}
      />
      <Button
        variant="plain"
        icon={<img src={bulkFrontIcon} alt="none" />}
        onClick={onBulkfront}
        disabled={pageNumber >= maxPageNumber}
      />
    </Wrapper>
  );
}

Pagination.defaultProps = {
  recordsPerPage: 10,
  bulkSkip: 5,
  onPageChange: () => null,
  pageNumber: 1,
  maxRecordNumber: 0,
};

Pagination.propTypes = {
  recordsPerPage: PropTypes.number,
  bulkSkip: PropTypes.number,
  onPageChange: PropTypes.func,
  pageNumber: PropTypes.number,
  maxRecordNumber: PropTypes.number,
};
.pagination-wrapper {
  width: 312px;
  background-color: var(--color-secondary-background);
  .page-details {
    gap: 5px;
    span {
      font-size: 14px;
      color: var(--color-secondary-grey-80);
      font-weight: 500;
    }
  }
}
<Pagination
            pageNumber={pageNumber}
            maxRecordNumber={totalItems}
            recordsPerPage={recordsPerPage}
            bulkSkip={bulkSkip}
            onPageChange={onPageChange}
          />
          const [pageNumber, setPageNumber] = useState(filter?.pageNumber || 1);
          const bulkSkip = 5;
          const onPageChange = (changeNumber) => {
            setPageNumber(changeNumber);
          };