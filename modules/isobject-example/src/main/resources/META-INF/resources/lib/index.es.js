//
// Even though we are importing modules made by us for this example, you can
// import any module published under npmjs.com.
//
// The reason for using such ad-hoc modules is that we want to demonstrate how
// the correct versions are loaded, and for that to happen, we have published
// modified versions of the original isArray and isObject packages at npmjs.com.
//
import isArray from 'liferay-npm-examples-isarray';
import isObject from 'liferay-npm-examples-isobject';

export default function() {
	var t;

	out.innerHTML += 'Calling isArray([]) from index.es.js\n';
	t = isArray([]);
	out.innerHTML += 'which returns ' + t + '\n';

	out.innerHTML += 'Calling isObject([]) from index.es.js\n';
	t = isObject([]);
	out.innerHTML += 'which returns ' + t + '\n';
}
