import {ComponentFactoryResolver, Inject, Injectable, ViewContainerRef} from "@angular/core";


@Injectable()
export class ComponentInjectorService {
	rootView: any;
	factoryResolver: ComponentFactoryResolver;


	constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
		this.factoryResolver = factoryResolver;
	}


	public setRootViewHolder(rootView: ViewContainerRef) {
		this.rootView = rootView;
	}


	public fillComponent(componentClass: any) {
		const componentFactory = this.factoryResolver.resolveComponentFactory(componentClass);
		const component = componentFactory.create(this.rootView.parentInjector);

		this.rootView.clear();
		this.rootView.insert(component.hostView);
	}
}
