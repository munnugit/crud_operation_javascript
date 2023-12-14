var el = document.getElementById('name_list');
var names = [];

ListAll();
Close();

function ListAll() {
	var data = '';
	if (names.length > 0) {
		for (i = 0; i < names.length; i++) {
			data += '<tr>';
			data += '<td>' + names[i] + '</td>';
			data += '<td colspan="2"><center><button class="btn btn-warning" onclick="Edit(' + i + ')"><span class="glyphicon glyphicon-edit"></span> Edit</button> | <button class="btn btn-danger" onclick="Delete(' + i + ')"><span class="glyphicon glyphicon-trash"></span> Delete</button></center></td>';
			data += '</tr>';
		}
	}
	
	el.innerHTML = data;
};


function Add() {
    var el = document.getElementById('name')
	var name = el.value;
	if (name) {
		names.push(name.trim());
		el.value = '';
		ListAll();
	}
	ListAll();
};

function Delete(item) {
	names.splice(item, 1);
	ListAll();
	
};

function Edit(item) {
	var el = document.getElementById('edit_name');
	el.value = names[item];
	document.getElementById('edit').style.display = 'block';
	self = this;
	
	document.getElementById('update').onsubmit = function() {
	var name = el.value;
		if (name) {
			self.names.splice(item, 1, name.trim());
			self.ListAll();
			Close();
		}
	}
};


function Close() {
	document.getElementById('edit').style.display = 'none';
}
	
	