function AllData(){
    const ctx = React.useContext(UserContext);
    return (
        <div className="p-3">
        <Card
          bgcolor="primary"
          header="All Data"
          body= {(
            <li>Make user submissions appear here somehow</li>
          )}
          
        />
        </div>
       // <h1>All Data<br/>
         //   {JSON.stringify(ctx)}
        //</h1>
    );
}