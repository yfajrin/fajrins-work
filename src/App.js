const App = () => {
  const categories = [
    {
      id:1,
      title:'Books & Articles'
    },
    {
      id:2,
      title:'Photos'
    },
    {
      id:3,
      title:'Graphic Designs'
    },
    {
      id:4,
      title:'Templates'
    },
    {
      id:5,
      title:'Apps'
    }
  ]
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-container">
        {/* <img /> */}
        <div className="category-body-container">
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
      ))}
      
      
    </div>
  );
}

export default App;
