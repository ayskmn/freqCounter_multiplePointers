// add whatever parameters you deem necessary
// add whatever parameters you deem necessary

// function makeFreqCounter(str) {
// 	let freq = {};
// 	for(let char of str) {
// 		freq[char] = freq[char] ++ || 1 
// 	}
// 	return freq;
// }

// function constructNote(str1, str2) {
// 	const str1Freq = makeFreqCounter(str1);
// 	const str2Freq = makeFreqCounter(str2);

// 	for(let char of str1) {
// 		if(!str2Freq[char]) return false;
// 		if(str1Freq[char] > str2[char]) return false;
// 	}
// 	return true;
// }

function constructNote(message, letters) {
	const lettersFreq = {};
	const messageFreq = {};
	for(let char of letters) {
		lettersFreq[char] = lettersFreq[char] +1 || 1;
	}
	for(let char of message) {
		messageFreq[char] = messageFreq[char]+1 || 1;
	}
	for(let char in messageFreq) {
		if(!lettersFreq[char]) {
			return false;
		}
		if(messageFreq[char]> lettersFreq[char]) {
			return false;
		}
	}
	return true;
}