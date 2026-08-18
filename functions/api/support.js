export async function onRequestPost(context) {

    return new Response(
        JSON.stringify({
            success: true,
            message: "Dymonnd IT support endpoint is working."
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

}