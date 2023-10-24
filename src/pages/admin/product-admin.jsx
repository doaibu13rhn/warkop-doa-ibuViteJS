import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import getImageUrl from "../../utils/imageGetter";
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/Footer";
import DropdownMobile from "../../components/DropdownMobile";

function ProductAdmin() {

    return (
        <>
        <NavbarLogin/>
        <main className="flex w-full">
            <section className="w-1/4 px-5">A</section>
            <section>B</section>
        </main>
        </>
    )
}

export default ProductAdmin;