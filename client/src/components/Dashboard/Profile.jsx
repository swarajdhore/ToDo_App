import React from "react";

function Profile() {
  return (
    <div>
      <div class="text-gray-200 border-gray-800 rounded flex items-center justify-between p-2">
        <div class="flex items-center space-x-2">
          <img
            src="https://ui-avatars.com/api/?name=Anish+Tilloo&size=128&background=0000FF&color=fff"
            class="w-7 w-7 rounded-full"
            alt="Profile"
          />
          <h1>Anish Tilloo</h1>
        </div>
        {/* <a onclick="event.preventDefault(); document.getElementById('logoutForm').submit()" href="#" class="hover:bg-gray-800 hover:text-white p-2 rounded">
                        <form id="logoutForm" action="" method="POST"></form>
                            {/* <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>    
                        </form>
        </a> */}
      </div>
    </div>
  );
}

export default Profile;
