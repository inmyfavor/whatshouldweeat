import classNames from 'classnames';
import React, { useState } from 'react';
import Button from './Button';
// import { useNavigate } from 'react-router-dom';

const App = () => {
  // const navigate = useNavigate();
  const [taste, setTaste] = useState(null);
  const [howToCook, setHowToCook] = useState(null);
  return (
    <div style={{'height': (window.screen.height)*0.8}} className='flex justify-center items-center'>
      <div className='flex flex-col gap-[16px]'>
        <div className='text-[24px]'>Что едим сегодня?</div>
        <div className='flex flex-row'>
          <Button 
            name={'солёное'} 
            classname={classNames('border-l rounded-l-[8px]', {'bg-blue text-white' : taste===0})} 
            onClick={()=>setTaste(0)}
          />
          <Button 
            name={'сладкое'} 
            classname={classNames('border-x', {'bg-blue text-white' : taste===1})}
            onClick={()=>setTaste(1)}
          />
          <Button 
            name={'всё равно'} 
            classname={classNames('border-r rounded-r-[8px]', {'bg-blue text-white' : taste===2})}
            onClick={()=>setTaste(2)}
          />
        </div>
        <div className='flex flex-row'>
          <Button 
            name={'варить'}
            classname={classNames('border-l rounded-l-[8px]', {'bg-blue text-white' : howToCook===0})}
            onClick={()=>setHowToCook(0)}
          />
          <Button 
            name={'жарить'} 
            classname={classNames('border-l', {'bg-blue text-white' : howToCook===1})}
            onClick={()=>setHowToCook(1)}
          />
          <Button 
            name={'запекать'} 
            classname={classNames('border-x', {'bg-blue text-white' : howToCook===2})}
            onClick={()=>setHowToCook(2)}
          />
          <Button 
            name={'всё равно'}
            classname={classNames('border-r rounded-r-[8px]', {'bg-blue text-white' : howToCook===3})}
            onClick={()=>setHowToCook(3)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;