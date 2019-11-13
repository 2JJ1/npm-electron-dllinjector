
# dllinjector

**npm install dllinjector**  

Built for use on Windows OS with Node.js. 
If you want to use this for Electron, please view the "electron-dllinjector" NPM package

    //Access to the injector class
    const dllinjector = require('dllinjector')

## Class methods

    InjectDLL(<string> DLLFilePath, <int>ProcessID)
      //Injects the dll at the specified path into the process with specified id
      //Returns true if no error
    
    GetProcessIDByName(<string> ProcessName)
      //Searches process list for the first occurance of the specified process name and returns the process id
      
    KillProcess(<int> ProcessID)
      //Kills the process with the specified ID
      //Returns true if killed, false otherwise
      
    GetRunningApplications()
      //Returns array of objects. Ex. [{pid: 0, name:"notepad.exe"},{pid: 1, name:"program.exe"},...]

    &more
