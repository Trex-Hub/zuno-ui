import { Badge } from "@/registry/new-york/ui/badge";
import { Button } from "@/registry/new-york/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-32 pb-16 lg:pt-48 lg:pb-32" data-oid="xopc5p.">
      <div
        className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl"
        data-oid="wuzyc55"
      >
        <div className="mx-auto max-w-3xl text-center" data-oid="a4m:4_e">
          <div
            className="text-muted-foreground inline-flex items-center gap-2 text-sm"
            data-oid="5b:z19t"
          >
            <Badge data-oid="95lrpsz">New</Badge> Introducing Smart Planning
          </div>
          <h1
            className="mt-4 text-2xl/tight font-bold tracking-tight text-balance sm:text-4xl/tight lg:text-5xl/tight"
            data-oid="zwsi0h3"
          >
            Design Soft Comfortable Spaces That Inspires Your Clients
          </h1>
          <p
            className="text-muted-foreground mx-auto mt-4 max-w-lg text-base/7 text-balance sm:text-lg/8"
            data-oid="f_thfqh"
          >
            Sed eu quam id quam tristique phar etra ait tortor lorem.
            Suspendisse vel odio sit amet libero facilisis cillum.
          </p>
          <div
            className="mt-8 grid gap-3 sm:flex sm:justify-center"
            data-oid="zpmrqw9"
          >
            <Button size="lg" data-oid="94j4w:k">
              Request Demo
            </Button>
            <Button size="lg" variant={"link"} data-oid="-lxhrh6">
              Learn More <ArrowRight data-oid="gnw._gx" />
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl" data-oid="pxkzosc">
          <img
            className="aspect-[16/9] w-full rounded-xl object-cover object-center shadow-sm"
            src="https://blookie.io/stock/heroes-4-1.webp"
            alt="#"
            data-oid="hytz-5f"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
