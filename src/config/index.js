const authorityList = [
	"库存管理_库位_查看",
	"库存管理_库位_编辑",
	"库存管理_拣货箱_查看",
	"库存管理_拣货箱_编辑",
	"库存管理_波次模板_查看",
	"库存管理_波次模板_编辑",
	"库存管理_波次指派_查看",
	"库存管理_波次指派_分配",
	"库存管理_波次拣货_查看",
	"库存管理_波次拣货_拣货"
];

const layout = [
	{
		index: 1,
		icon: 'user',
		name: 'nav1',
		children: [
			{
				index: 1,
				icon: 'user',
				name: 'navnav1',
				link: '/page2',
				children: [
					{
						index: 1,
						icon: 'user',
						name: 'navnav1',
						link: '/page2',
					}
				],
			}
		]
	},
	{
		index: 2,
		icon: 'video-camera',
		name: 'nav2',
		link: '/main/page1',
		children: []
	},
	{
		index: 3,
		icon: 'upload',
		name: 'nav3',
		link: '/main/page2',
		children: []
	},
	{
		index: 4,
		icon: 'user',
		name: 'nav4',
		link: '/main/page3',
		children: []
	}
]

export {
    authorityList,
	layout,
}
