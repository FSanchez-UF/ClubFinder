import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import './App.css'
import Page from './Page.js'
import Submit from './Submit'

const LOCAL_STORAGE_KEY = 'ClubFinder.data'

const Categories = [{name:'Nursing', selected: false}, {name:'Agricultural and Life Sciences', selected: false}, {name:'Research-Arts', selected: false}, 
                    {name:'Business', selected: false}, {name:'Dentistry', selected: false}, {name:'Design/Construction/Planning', selected: false}, 
                    {name:'Education', selected: false}, {name:'Engineering', selected: false}, {name:'Health and Human Performance', selected: false}, 
                    {name:'Journalism and Communications', selected: false}, {name:'Law', selected: false}, {name:'Liberal Arts and Sciences', selected: false}, 
                    {name:'Medicine', selected: false}, {name:'Pharmacy', selected: false}, {name:'Public Health and Health Professions', selected: false}, 
                    {name:'Veterinary Medicine', selected: false}, {name:'Ambassador', selected: false}, {name:'Community/Volunteer Service', selected: false}, 
                    {name:'Cultural', selected: false}, {name:'Fine Arts', selected: false}, {name:'Graduate', selected: false}, {name:'Healthy Living', selected: false}, 
                    {name:'Honor Society', selected: false}, {name:'Interfraternity Council', selected: false}, {name:'Media/Publication', selected: false}, 
                    {name:'Military', selected: false}, {name:'Multicultural Greek Council', selected: false}, {name:'National Pan-Hellenic Council', selected: false}, 
                    {name:'Panhellenic Council', selected: false}, {name:'Political Interests', selected: false}, {name:'Professional/Career', selected: false}, 
                    {name:'Recreation', selected: false}, {name:'Religious/Spiritual', selected: false}, {name:'Social and Global Change', selected: false}, 
                    {name:'Special Interests', selected: false}, {name:'Sport Clubs', selected: false}]

const App = () => {

  // const categorySelectionRef = useRef()
  // function selectCategory(id) {
  //   const newcategory = categorySelectionRef.current.value

  // }

  // useEffect(() => {
  //   const storedSelections = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   if (storedSelections) setSelected(storedSelections)
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selected))
  // }, [selected])

  function selectCategory(name) {
    const newCategories = [...categories]
    const category = newCategories.find(category => category.name === name)
    category.selected = !category.selected
    setCategories(newCategories)
  }
  
  const [categories, setCategories] = useState(Categories)

  return (
    <>
      <Page categories = {categories} selectCategory={selectCategory}/>
      <Submit />
    </>
  )

}

export default App

// const [clubs, setClubs] = useState([])
  // const getData = async() => {
  //   const res = await axios.get('/Club_Data')
  //   setClubs(res.data)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])
 
  // return (
  //   <div>
  //     {clubs.map(u => <h4 key={u._id}>name : {u.name}</h4>)}
  //   </div>
  // )