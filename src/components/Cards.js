import React from "react"
import "./Cards.css"
import CardItem from "./CardItem"

function Cards() {
  return (
    <div className="cards">
      <h1>Check out some of my Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/my-reading-list.jpg"
              text="Save book title, author, and year to local storage. Mark a book as read, or Delete book from list. Sort the book list by title, author, or year. Shows alerts for adding, removing books, or not entering all fields. "
              label="My Reading List Application"
              path="https://gtonnis.github.io/my-reading-list-v2/"
            />
            <CardItem
              src="images/kitchen-bar.jpg"
              text="Uses an API to search, returns 20 food or drink recipes with calorie, diet, and health information. Viewing recipe opens new window with recipe."
              label="Kitchen and Bar Recipe Search"
              path="https://gtonnis.github.io/Kitchen-and-Bar-App/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/home-inspector.jpg"
              text="Click to view Home Inspector Website"
              label="Home Inspector Website"
              path="/services"
            />
            <CardItem
              src="images/pc-build.png"
              text="Click to view Build a Computer Website"
              label="Build a Computer Website"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
