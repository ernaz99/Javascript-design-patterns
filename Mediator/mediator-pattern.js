
const mediator={};

const orgChart={
    addNewEmployee(){
        const employeeDetail=this.getEmployeeDetail();

        employeeDetail.on("complete",employee);
        const managerSelector=this.selectManager(employee);
        managerSelector.on("save",employee=>{
            employee.save();
        })
    }



}