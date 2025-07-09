import React from 'react'

const page = () => {
    return (
        <main className="w-screen h-1/2 md:h-3/4 mt-3 flex justify-center items-center overflow-hidden">
            <div className="container flex justify-center items-center w-full h-full mx-auto rounded-2xl border-2 border-white bg-black opacity 7">
                <div className="wrapper grid grid-cols-2">

                    <div className="about-wrapper flex flex-col justify-between items-center px-3">
                        <h1>About Me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolores facere voluptatem sunt cumque repudiandae magni, numquam molestiae accusamus, voluptate incidunt sapiente molestias accusantium cupiditate ipsam natus atque eveniet neque, libero dolorum aliquid adipisci asperiores optio corrupti. Nam rerum ipsam suscipit necessitatibus nihil, accusantium deleniti itaque provident autem recusandae veniam.</p>
                    </div>

                    <div className="about-wrapper flex flex-col justify-between items-center">
                        <h1>About Me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolores facere voluptatem sunt cumque repudiandae magni, numquam molestiae accusamus, voluptate incidunt sapiente molestias accusantium cupiditate ipsam natus atque eveniet neque, libero dolorum aliquid adipisci asperiores optio corrupti. Nam rerum ipsam suscipit necessitatibus nihil, accusantium deleniti itaque provident autem recusandae veniam.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page