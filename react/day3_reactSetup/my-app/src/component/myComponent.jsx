import Card from "./card/card";

const list = [
  {
    title: "Winter Holiday",
    image:
      "https://st4.depositphotos.com/1194063/20120/i/450/depositphotos_201203326-stock-photo-attractive-pineapples-stylish-sunglasses-sand.jpg",
    description: "A holiday in winter",
    likes: 123,
    comments: ["Good", "Nice", "Great"],
  },
  {
    title: "Winter Holiday",
    image:
      "https://st4.depositphotos.com/1194063/20120/i/450/depositphotos_201203326-stock-photo-attractive-pineapples-stylish-sunglasses-sand.jpg",
    description: "A holiday in winter",
    likes: 123,
    comments: ["Good", "Nice", "Great"],
  },
  {
    title: "Winter Holiday",
    image:
      "https://st4.depositphotos.com/1194063/20120/i/450/depositphotos_201203326-stock-photo-attractive-pineapples-stylish-sunglasses-sand.jpg",
    description: "A holiday in winter",
    likes: 123,
    comments: ["Good", "Nice", "Great"],
  },
  // Additional objects in the list can be added here...
];

const MyComponent = () => {
  return (
    <div>
      {
        list.map((item, index) => (
          <Card
            {...item}
            key={index}
            
            // Using a unique key for each item in the list
            // title={item.title}
            // imageUrl={item.image}
            // description={item.description}
            // likes={item.likes}
            // comments={item.comments[index]}
          />
        ))
      }
    </div>
  );
};

export default MyComponent;
