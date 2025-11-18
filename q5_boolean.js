function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    if (isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}
checkSecurity(true, false, true, true); //output: Unsafe
checkSecurity(true, true, false, true); //output: Unsafe
checkSecurity(true, true, true, false); //output: Unsafe
checkSecurity(true, true, true, true);  //output: Secure
