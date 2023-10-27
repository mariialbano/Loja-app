export default function FrutaView() {

    let frutas;

    try {

        const response = await fetch("http://localhost:3000/dados/produto-api");
        frutas = await response.json();

    } catch (error) {
        console.log(error);
        redirect("/error");
    }

    return(
        <div>page</div>
    )
}