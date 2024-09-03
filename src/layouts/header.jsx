import MenuBar from "../components/menubar"

const Header = () => {
    return (
        <>
            {/* <!-- follow me on twitter @asad_codes --> */}

            <div className="flex flex-wrap place-items-center">
                <section className="relative mx-auto">
                    {/* <!-- navbar --> */}
                    <MenuBar />
                </section>
            </div>

        </>
    )
}

export default Header