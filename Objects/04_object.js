    // computed propertie
    const key1 = "objkey1";
    const key2 = "objkey2";

    const val1 = "objval1";
    const val2 = "objval2";

    // Not getting the desired thing
    const obj = {
        key1 : val1,
        key2 : val2
    }

    console.log(obj);

    // getting the desired thing
    const obj2 = {
        [key1] : val1,
        [key2] : val2
    }

    console.log(obj2);