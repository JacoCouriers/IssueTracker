import IssueListControl from "./ListControl/IssueListControl";

function App() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-50 p-10"> 
      <div className="space-y-5 text-center border-gray-200 border-2 rounded-lg">
        
        {/* Table Headers */}
        <div className="flex space-x-10 justify-center items-center border-b p-5 bg-gray-100 rounded-t-lg">
          <p className="text-xs w-28 font-bold">Issue Title</p>
          <p className="text-xs w-28 font-bold">Status</p>
          <p className="text-xs w-28 font-bold">Filed Date</p>
          <p className="text-xs w-28 font-bold">Fixed Date</p>
          <p className="text-xs w-28 font-bold">Filed By</p>
          <p className="text-xs w-28 font-bold">Fixed By</p>
        </div>

        {/* Issue Items */}
        <div className="space-y-5 p-5">
          <IssueListControl issue="Test Issue" dateFiled="22/03/2025" dateFixed="23/03/2025" status="Fixed" filedBy={"Joyce"} fixedBy={"Jayden"}/>
          <IssueListControl issue="Test Issue" dateFiled="23/03/2025" dateFixed="-" status="Filed" filedBy={"Becca"} fixedBy={"-"}/>
          <IssueListControl issue="Test Issue" dateFiled="24/03/2025" dateFixed="25/03/2025" status="Fixed" filedBy={"Carolyn"} fixedBy={"Jayden"}/>
          <IssueListControl issue="Test Issue" dateFiled="24/03/2025" dateFixed="-" status="Filed" filedBy={"Becca"} fixedBy={"-"}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
