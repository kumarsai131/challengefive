export default function Pagination({
  postsPerPage,
  totalPost,
  SetCurrentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++)
    pageNumbers.push(i);

  return (
    <>
      <div>
        {pageNumbers.map((e) => {
          return (
            <button
              className="button button2"
              key={e}
              onClick={() => SetCurrentPage(e)}
            >
              {e}
            </button>
          );
        })}
      </div>
    </>
  );
}
