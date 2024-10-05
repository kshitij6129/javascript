let book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy"
  };
  let detail="the details of this book is:";
  for(let x in book){
    detail+= book[x]
  }
  console.log(detail)
  alert(detail)