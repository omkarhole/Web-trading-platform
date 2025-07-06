import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from '../Landing_page/home/Hero';


describe("hero Component ",()=>{
    test("renders hero image ",()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Home image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage.getAttribute("src")).toMatch("media/images/homeHero.png");

    });
});