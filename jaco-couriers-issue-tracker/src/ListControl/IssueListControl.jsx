function IssueListControl({ issue, status, dateFiled, dateFixed, filedBy, fixedBy}) {
    return (
      <div className="flex space-x-10 justify-center items-center">
        <p className="text-xs w-28">{issue}</p>
  
        {/* Status Badge */}
        <p
          className={`text-xs py-1 rounded-full w-28 text-center ${
            status === "Fixed"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </p>
  
        <p className="text-xs w-28">{dateFiled}</p>
        <p className="text-xs w-28">{dateFixed}</p>
        <p className="text-xs w-28">{filedBy}</p>
        <p className="text-xs w-28">{fixedBy}</p>
      </div>
    );
  }
  
  export default IssueListControl;
  