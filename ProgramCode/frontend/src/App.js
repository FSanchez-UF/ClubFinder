import React, {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Homepage from './Homepage.js'
import ResultsPage from './ResultsPage'

const LOCAL_STORAGE_KEY = 'ClubFinder_data'

const Categories = [{name:'Agricultural and Life Sciences', selected: false}, {name:'Ambassador', selected: false}, {name:'Business', selected: false},
                    {name:'Community/Volunteer Service', selected: false}, {name:'Cultural', selected: false}, {name:'Dentistry', selected: false}, 
                    {name:'Design/Construction/Planning', selected: false}, {name:'Education', selected: false}, {name:'Engineering', selected: false}, 
                    {name:'Fine Arts', selected: false}, {name:'Graduate', selected: false}, {name:'Health and Human Performance', selected: false}, 
                    {name:'Healthy Living', selected: false}, {name:'Honor Society', selected: false}, {name:'Interfraternity Council', selected: false}, 
                    {name:'Journalism and Communications', selected: false}, {name:'Law', selected: false}, {name:'Liberal Arts and Sciences', selected: false}, 
                    {name:'Media/Publication', selected: false}, {name:'Medicine', selected: false}, {name:'Military', selected: false}, 
                    {name:'Multicultural Greek Council', selected: false}, {name:'National Pan-Hellenic Council', selected: false}, {name:'Nursing', selected: false}, 
                    {name:'Other', selected: false}, {name:'Panhellenic Council', selected: false}, {name:'Pharmacy', selected: false}, 
                    {name:'Political Interests', selected: false}, {name:'Professional/Career', selected: false}, {name:'Public Health and Health Professions', selected: false}, 
                    {name:'Recreation', selected: false}, {name:'Religious/Spiritual', selected: false}, {name:'Social and Global Change', selected: false}, 
                    {name:'Special Interests', selected: false}, {name:'Sport Clubs', selected: false}, {name:'Veterinary Medicine', selected: false}]

const App = () => {
  // Storage containers for relevant information
  const [categories, setCategories] = useState(Categories)
  const [selections, setSelections] = useState([])
  const [results, setResults] = useState([])
  const [clubs, setClubs] = useState([])

  useEffect(() => { // Grab results from local storage on refresh
    const storedResults = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedResults) setResults(storedResults)
  },[]) 

  useEffect(() => { // Store results to local storage on change
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(results))
  },[results])

  const getData = async() => { // Retrieves club information from database and stores in clubs
    const res = await axios.get('/Club_Data')
    setClubs(res.data)
  }

  useEffect(() => { // Call getData function on start
    getData()
  }, [])

  useEffect(() => { // Starts window position at top of results page
    window.scrollTo(0, 0)
  }, [results])

  useEffect(() => { // Stores the users selected categories in selections array
    function selectedCategories() {
      const newCategories = [...categories]
      const selected = newCategories.filter(category => category.selected === true)
      const names = selected.map(category => category.name)
      setSelections(names)
    }
    selectedCategories()
  },[categories])

  function checkMarkCategory(name) { // Changes selected variable to true or false and checks or unchecks category
    const newCategories = [...categories]
    const category = newCategories.find(category => category.name === name) 
    category.selected = !category.selected
    setCategories(newCategories)
  }

  function result() { // Searching algorithm for finding clubs that have a category that matches one that a user selected
    const newSelections = [...selections]
    const newClubs = [...clubs]
    const categoriesFound = newClubs.filter(club => newSelections.find(selection => club.category.includes(selection)))
    if (categoriesFound) {
      setResults(categoriesFound)
    }
  }

  function clear() { // Clears all of the user's category selections
    setSelections([])
    const newCategories = [...categories]
    const reset = newCategories.map(category => category.selected === true ? Object.assign({}, category, {selected: !category.selected}, {name: category.name}) : category)
    setCategories(reset)
  }

  function selectAll() { // Selects all categories when the user click the "Select All" button
    const newCategories = [...categories]
    const all = newCategories.map(category => category.selected === false ? Object.assign({}, category, {selected: !category.selected}, {name: category.name}) : category)
    setCategories(all)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage categories={categories} checkMarkCategory={checkMarkCategory} result={result} 
                                           clear={clear} selectAll={selectAll}/>}
        />
        <Route path="results" element={<ResultsPage results={results} clear={clear}/>}/>
      </Routes>  
    </>
  )
}

export default App

