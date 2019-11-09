var DllInjectorModule = null;

//Determine to use x64 or ia32 module
if(process.arch === "x64") DllInjectorModule = require('./x64_dllinjector');
else if(process.arch === "ia32") DllInjectorModule = require('./x86_dllinjector');
else throw new Error("Only Windows x86 & x64 can use dllinjector");

//Checks if module loaded
if(Object.keys(DllInjectorModule).length < 1){
    throw new Error("Failed to load dependency");
}

class Library {
    //Returns the process id of the first appearing process with the specified name
    GetProcessIDByName(processName){
        return DllInjectorModule.GetProcessIDByName(processName);
    }

    //Injects the dll into the process id. Returns true if successful injection
    InjectDLL(DLLFilePath, processID){
        return DllInjectorModule.InjectDLLIntoProcessIdentifier(DLLFilePath, processID)
    }

    //Terminates a running process indentified by process id. Returns true if successful kill
    KillProcess(processID){
        return DllInjectorModule.KillProcessID(processID);
    }

    //Returns list of running processes as JSON
    GetRunningProcesses(){
        return JSON.parse(DllInjectorModule.GetRunningProcesses())
    }

    //Returns list of running processes as JSON
    GetRunningApplications(){
        return JSON.parse(DllInjectorModule.GetRunningApplications())
    }
}

module.exports = new Library();