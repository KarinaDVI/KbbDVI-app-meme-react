import React from 'react'

export default function ButtonReset({ 
            setPosx,
            setPosy,
            setRotz,
            setColor,
            setTextSize,
            setImgmeme,
            setActiveIndex,
            setSizePhotow, users
            }) {
    const handleResetClick = () => {
        setPosx(0);
        setPosy(0);
        setRotz(0);
        setColor("#ff0000");
        setTextSize(20);
        setImgmeme('https://i.imgflip.com/1h7in3.jpg')
        setActiveIndex(users.findIndex((user) => user.url === 'https://i.imgflip.com/1h7in3.jpg'))
        setSizePhotow(60);
    
          };
  return (
    <div>
      <button
    className="btn btn-success mt-2"
    id="restore"
    onClick={handleResetClick}
  >Reset
  </button>
    </div>
  )
}
