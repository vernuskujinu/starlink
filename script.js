		// Получаем ссылки на элементы модального окна и кнопки закрытия
		var modal = document.getElementById("myModal");
		var closeBtn = document.getElementsByClassName("close")[0];

		// Функция открытия модального окна
		function openModal() {
			modal.style.display = "block";
		}

		// Функция закрытия модального окна
		function closeModal() {
			modal.style.display = "none";
		}

		// Закрытие модального окна при нажатии на кнопку закрытия
		closeBtn.onclick = function() {
			modal.style.display = "none";
		}