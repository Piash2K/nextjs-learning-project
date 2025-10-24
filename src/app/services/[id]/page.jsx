import React from "react";

export default async function ServiceDetailPage({ params }) {
  const data = [
  {
    _id: "6719a1e45b2f4b1c9c01a001",
    service_name: "Web Development",
    service_image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
    service_description: "Professional full-stack web development services using modern technologies like React.js, Node.js, and MongoDB to build fast, secure, and responsive web applications."
  },
  {
    _id: "6719a1e45b2f4b1c9c01a002",
    service_name: "UI/UX Design",
    service_image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg",
    service_description: "We create stunning, user-centered designs that enhance engagement and ensure a smooth user experience across all devices."
  },
  {
    _id: "6719a1e45b2f4b1c9c01a003",
    service_name: "Mobile App Development",
    service_image: "https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain",
    service_description: "Cross-platform mobile app development using Flutter and React Native to deliver high-performance apps for Android and iOS."
  },
];
const {id} = await params;
  // console.log("Id iS:", id)
  const singleData = data.find(d=> d._id===id)
  return (
    <div>
      <h1>ServiceDetailPage</h1>
      <p className="font-bold text-white">Id: {id}</p>
      <p>
        {singleData.service_name}
        <img src={singleData.service_image}/>
        {singleData.service_description}
      </p>
    </div>
  );
}
