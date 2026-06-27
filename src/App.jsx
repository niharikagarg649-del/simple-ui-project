
import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users = [
    {
      color: "#FF6B6B",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      tag: "Finance"
    },
    {
      color: "#4ECDC4",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      tag: "Tech"
    },
    {
      color: "#1A535C",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      tag: "Marketing"
    },
    {
  color: "#FF9F1C",
  img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  tag: "E-commerce"
},
{
  color: "#6A4C93",
  img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
  tag: "Healthcare"
},
{
  color: "#00A8E8",
  img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  tag: "Education"
},
{
  color: "#2EC4B6",
  img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
  tag: "Startup"
}
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App