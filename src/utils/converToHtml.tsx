const converToHtml = (str: string) => {
  return (
    <>
      {str.split('\n').map((line) => {
        return (
          <span key={line}>
            {line}
            <br />
          </span>
        );
      })}
    </>
  );
};

export default converToHtml;
