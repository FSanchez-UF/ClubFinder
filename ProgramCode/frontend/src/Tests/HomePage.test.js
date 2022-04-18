import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '../HomePage'
import selectCategory from '../App'

test('Checks that a category renders properly', () => {
    
    const categories = [{name:'Nursing', selected: false}, {name:'Agricultural and Life Sciences', selected: false}, {name:'Research-Arts', selected: false}, 
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

    render(<HomePage categories={categories} selectCategory={selectCategory}/>)

    const todoElement1 = screen.getByTestId('page-test')
    expect(todoElement1).toBeInTheDocument();

    const todoElement2 = screen.getByTestId('logo-test')
    expect(todoElement2).toBeInTheDocument();

    const todoElement3 = screen.getByTestId('label-test')
    expect(todoElement3).toBeInTheDocument();
    expect(todoElement3).toHaveTextContent('Categories')
})