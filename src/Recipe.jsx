import React from 'react';
import { recipes } from './Data.jsx'

function allIngridients(ingridients) {
    let result = [];
    for (let i = 0; i < ingridients.length; i++) {
        result.push(
            <div className='text-[14px] font-medium'>
                {ingridients[i]}
            </div>
        )
    }
    return result;
}

function allAmount(amount) {
    let result = [];
    for (let i = 0; i < amount.length; i++) {
        result.push(
            <div className='text-[14px]'>
                {amount[i]}
            </div>
        )
    }
    return result;
}

function allSteps(steps) {
    let result = [];
    for (let i = 0; i < steps.length; i++) {
        result.push(
            <div className='text-[14px]'>
                {i+1}. {steps[i]}
            </div>
        )
    }
    return result;
}

const ChooseRecipe = (props) => {
    return (
        <div className='flex flex-col gap-[32px] mt-[50px] mx-[200px]'>
            <div className='text-[24px] font-bold'>{props.name}</div>
            <div className='flex flex-row gap-[240px]'>
                <div className='flex flex-col gap-[16px]'>
                    <div className='text-[18px]'>Что нужно?</div>
                    <div className='flex flex-row gap-[32px]'>
                        <div className='flex flex-col gap-[8px]'>
                            {allIngridients(props.ingridients)}
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            {allAmount(props.amount)}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]'>
                    <div className='text-[18px]'>Рецепт</div>
                    <div className='flex flex-col gap-[8px]'>
                        {allSteps(props.steps)}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Recipe = () => {
    const num = Math.floor(Math.random()*recipes.length);
    // const num = 0;
    return (
        <div>
            <ChooseRecipe name={recipes[num].name} ingridients={recipes[num].ingridients} amount={recipes[num].amount} steps={recipes[num].steps}/>
        </div>
    );
};

export default Recipe;