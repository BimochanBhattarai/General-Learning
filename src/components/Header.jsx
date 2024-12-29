import React from "react";

function Header() {
	return (
		<div className="bg-slate-700">
			<div className="flex justify-between w-10/12 mx-auto align-middle py-5">
				<div className="w-20 h-20 overflow-hidden rounded-full">
					<img
						style={{ margin: "-28px 0 0 0" }}
						src="https://images.unsplash.com/photo-1612810806563-4cb8265db55f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Tesla"
					/>
				</div>
				<div className="grow h-13 py-8">
					<ul className="flex gap-20 justify-end h-full text-white text-xl">
						<li>Home</li>
						<li>About</li>
						<li>Service</li>
						<li>Blog</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
