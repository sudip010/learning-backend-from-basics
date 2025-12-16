const getuser=() => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({name:"sudip",age:20});
            },2000);
        });
};
const main= async()=>{
    console.log("fetching user...");
    const user= await getuser();
    console.log("User fetched:",user);
};
main();