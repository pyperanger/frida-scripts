// Method Hawk=>PUT(KEY, VALUE)
// Return the values that will by encrypted
Java.perform(
    function()
    {
      var hook = Java.use("com.orhanobut.hawk.Hawk");
      console.log("Hooking:" + hook);
      
		hook.put.overload("java.lang.String","java.lang.Object").implementation = function(arg0, arg1) {
            console.warn("[+] Hooking   ->  hook.get(java.lang.String arg0, arg1)");
            var retval = this.put.overload("java.lang.String","java.lang.Object").call(this, arg0, arg1);
            console.log("\narg0:arg1    =>" + arg0 +" : "+ arg1);
			console.log("\nReturn value     =>" + retval);
			console.warn("[-] Leaving   ->  hook.get(java.lang.String arg0)");
            return retval;
        } 
    }
  );
